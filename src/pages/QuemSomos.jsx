
import React, { useEffect, useState } from 'react';
import Team from '../components/Team';

function GitHubAvatar({ usernames }) {
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        async function fetchAvatars() {
            try {
                const avatarData = await Promise.all(
                    usernames.map(async (username) => {
                        const response = await fetch(`https://api.github.com/users/${username}`);
                        const data = await response.json();
                        return { username, avatarUrl: data.avatar_url };
                    })
                );
                setAvatars(avatarData);
            } catch (error) {
                console.error('Erro ao buscar os perfis do GitHub:', error);
            }
        }

        fetchAvatars();
    }, [usernames]);

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>Fotos de Perfil do GitHub</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {avatars.length > 0 ? (
                    avatars.map(({ username, avatarUrl }) => (
                        <div key={username}>
                            <img
                                src={avatarUrl}
                                alt={`Avatar de ${username}`}
                                style={{ borderRadius: '50%', width: '100px' }}
                            />
                            <p>{username}</p>
                        </div>
                    ))
                ) : (
                    <p>Carregando imagens...</p>
                )}
            </div>
        </div>
    );
}

function QuemSomos() {
    const githubUsers = ["willyanhenrique","moniquearaujoo","Racc3","kaiomartinss", "eduardoarjp10"]; 

    return (
        <div style={{ padding: '2rem' }}>
            <p>Conheça a nossa equipe:</p>
            <Team />
            <GitHubAvatar usernames={githubUsers} />
        </div>
    );
}

export default QuemSomos;
