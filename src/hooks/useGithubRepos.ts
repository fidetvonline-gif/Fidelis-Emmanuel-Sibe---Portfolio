import { useState, useEffect, useCallback } from 'react';
import { githubProfileData, GithubRepo } from '../data/github';

export interface DynamicGithubData {
  username: string;
  profileUrl: string;
  publicReposCount: number;
  followersCount: number;
  repos: GithubRepo[];
  primaryLanguages: { name: string; percentage: number; color: string }[];
  loading: boolean;
  error: string | null;
  lastSynced: Date | null;
  refresh: () => Promise<void>;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  PHP: '#4f5d95',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  React: '#61dafb',
  Go: '#00ADD8',
  Rust: '#deb887',
  Java: '#b07219',
  Shell: '#89e051',
};

export function useGithubRepos(username = 'fidetvonline-gif'): DynamicGithubData {
  const [repos, setRepos] = useState<GithubRepo[]>(githubProfileData.recentRepos);
  const [publicReposCount, setPublicReposCount] = useState<number>(githubProfileData.publicReposCount);
  const [followersCount, setFollowersCount] = useState<number>(githubProfileData.followersCount);
  const [languages, setLanguages] = useState(githubProfileData.primaryLanguages);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSynced, setLastSynced] = useState<Date | null>(null);

  const fetchGithubData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (userRes.ok) {
        const userData = await userRes.json();
        if (userData.public_repos !== undefined) setPublicReposCount(userData.public_repos);
        if (userData.followers !== undefined) setFollowersCount(userData.followers);
      }

      // 2. Fetch repos (sorted by updated date)
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      if (!reposRes.ok) {
        throw new Error(`GitHub API returned status ${reposRes.status}`);
      }

      const rawRepos = await reposRes.json();

      if (Array.isArray(rawRepos) && rawRepos.length > 0) {
        // Map raw GitHub API items to our GithubRepo structure
        const mappedRepos: GithubRepo[] = rawRepos
          .filter((r: any) => !r.fork) // keep original repos primarily
          .map((r: any) => {
            const lang = r.language || 'TypeScript';
            return {
              name: r.name,
              description: r.description || `Public repository: ${r.name}`,
              language: lang,
              languageColor: LANGUAGE_COLORS[lang] || '#3178c6',
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              url: r.html_url,
              homepage: r.homepage || null,
              updatedAt: r.updated_at ? r.updated_at.split('T')[0] : new Date().toISOString().split('T')[0],
              topics: Array.isArray(r.topics) && r.topics.length > 0 ? r.topics : [lang.toLowerCase(), 'open-source'],
            };
          });

        setRepos(mappedRepos);

        // 3. Calculate live language distribution
        const langCounts: Record<string, number> = {};
        let totalCount = 0;
        mappedRepos.forEach((r) => {
          if (r.language) {
            langCounts[r.language] = (langCounts[r.language] || 0) + 1;
            totalCount++;
          }
        });

        if (totalCount > 0) {
          const langRatios = Object.entries(langCounts)
            .map(([name, count]) => ({
              name,
              percentage: Math.round((count / totalCount) * 100),
              color: LANGUAGE_COLORS[name] || '#BEF264',
            }))
            .sort((a, b) => b.percentage - a.percentage);

          setLanguages(langRatios);
        }

        setLastSynced(new Date());
      }
    } catch (err: any) {
      console.warn('GitHub API fetch notice:', err.message);
      setError('Using cached repositories. Auto-reconnecting to GitHub API...');
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchGithubData();

    // Auto refresh every 5 minutes in background
    const interval = setInterval(() => {
      fetchGithubData();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchGithubData]);

  return {
    username,
    profileUrl: `https://github.com/${username}`,
    publicReposCount,
    followersCount,
    repos,
    primaryLanguages: languages,
    loading,
    error,
    lastSynced,
    refresh: fetchGithubData,
  };
}
