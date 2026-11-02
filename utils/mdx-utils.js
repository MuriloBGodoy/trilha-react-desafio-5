import { api } from '../services/api';

const defaultPosts = [
  {
    id: 1,
    title: 'Iniciando com Next.js: O Framework React para Produção',
    description: 'Aprenda os conceitos fundamentais do Next.js, incluindo renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).',
    created_at: '2023-01-15T12:00:00Z',
    body: 'O Next.js é um dos frameworks mais populares do ecossistema React. Ele traz recursos poderosos como roteamento baseado em arquivos, suporte nativo a TypeScript, otimização automática de imagens e a possibilidade de mesclar renderização estática e dinâmica para máxima performance.'
  },
  {
    id: 2,
    title: 'Integrando Next.js com Banco de Dados na Nuvem (Supabase)',
    description: 'Como utilizar o Supabase como backend Serverless e PostgreSQL para armazenar e consultar posts do seu blog em tempo real.',
    created_at: '2023-02-20T14:30:00Z',
    body: 'O Supabase é uma alternativa open-source ao Firebase construída sobre o PostgreSQL. Com ele, você obtém uma API RESTful instantânea via PostgREST, autenticação completa e armazenamento em nuvem sem precisar configurar um servidor dedicado.'
  },
  {
    id: 3,
    title: 'Estilização Moderna com Tailwind CSS no Next.js',
    description: 'Produtividade e design consistente utilizando classes utilitárias do Tailwind CSS no seu blog pessoal.',
    created_at: '2023-03-10T09:15:00Z',
    body: 'O Tailwind CSS acelera o desenvolvimento de interfaces através de classes atômicas flexíveis. Combinado ao Next.js e ao suporte para temas claro/escuro, você cria experiências agradáveis e responsivas em minutos.'
  }
];

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts'); 
        if (data && Array.isArray(data) && data.length > 0) {
            return data;
        }
    } catch (error) {
        console.warn('Supabase offline ou inacessível. Usando posts locais de demonstração.');
    }

    return defaultPosts;
};

export const getPostBySlug = async (id) => {
    try {
        // Busca o post específico no Supabase filtrando pelo id
        const { data } = await api.get(`/posts?id=eq.${id}`);
        if (data && Array.isArray(data) && data.length > 0) {
            return data[0];
        }
    } catch (error) {
        console.warn(`Supabase offline ou post ${id} não encontrado na nuvem. Usando post local.`);
    }

    const post = defaultPosts.find(p => String(p.id) === String(id));
    return post || {};
};
