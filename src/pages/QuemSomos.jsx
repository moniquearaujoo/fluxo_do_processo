
import React, { useEffect, useState } from 'react';
import Team from '../components/Team';

function GitHubAvatar() {
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        async function fetchGitHubData() {
            try {
                const response = await fetch('https://api.github.com/users/octocat');
                const data = await response.json();
                setAvatarUrl(data.avatar_url);
            } catch (error) {
                console.error('erro ao buscar o perfil do GitHub:', error);
            }
        }

        fetchGitHubData();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>Foto de Perfil do GitHub</h2>

            {avatarUrl ? (
                <img
                    src={avatarUrl}
                    alt="Avatar do GitHub"
                    style={{ borderRadius: '50%', width: '150px' }}
                />
            ) : (
                <p>Carregando imagem...</p>
            )}
        </div>
    );
}

function QuemSomos() {
    return (
        <div style={{ padding: '2rem' }}>
            <p>Conheça a nossa equipe:</p>
            <Team />
            <GitHubAvatar />
        </div>
    );
}

export default QuemSomos;
