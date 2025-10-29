const URL_BASE_API = "https://restcountries.com/v3.1/"; 
const CAMPOS_NECESSARIOS = 'name,translations,capital,region,subregion,population,currencies,languages,flags,cca3';

// DICIONÁRIO DE TRADUÇÃO JÁ QUE A API NAO TRAZ OS DADOS TRADUZIDOS
const TRADUCOES = {
    // REGIÕES
    'Africa': 'África', 'Americas': 'Américas', 'Asia': 'Ásia', 'Europe': 'Europa', 'Oceania': 'Oceania', 'Antarctic': 'Antártida',
    'Southern Europe': 'Sul da Europa', 'Western Europe': 'Europa Ocidental', 'Northern Europe': 'Norte da Europa', 'Central Europe': 'Europa Central', 'Eastern Europe': 'Europa Oriental', 'South-Eastern Europe': 'Sudeste Europeu',
    'South America': 'América do Sul', 'North America': 'América do Norte', 'Central America': 'América Central', 'Caribbean': 'Caribe',
    'South-Eastern Asia': 'Sudeste Asiático', 'Southern Asia': 'Sul da Ásia', 'Western Asia': 'Ásia Ocidental', 'Eastern Asia': 'Ásia Oriental', 'Central Asia': 'Ásia Central',
    'Middle Africa': 'África Central', 'Northern Africa': 'Norte da África', 'Southern Africa': 'África Austral', 'Western Africa': 'África Ocidental', 'Eastern Africa': 'África Oriental', 
    'Australia and New Zealand': 'Austrália e Nova Zelândia', 'Melanesia': 'Melanésia', 'Micronesia': 'Micronésia', 'Polynesia': 'Polinésia',
    
    // MOEDAS
    'Euro': 'Euro', 'British pound': 'Libra Esterlina', 'United States dollar': 'Dólar Americano', 'Brazilian real': 'Real Brasileiro', 'Swiss franc': 'Franco Suíço', 
    'Swedish Krona': 'Coroa Sueca', 'Norwegian Krone': 'Coroa Norueguesa', 'Danish Krone': 'Coroa Dinamarquesa', 'Icelandic Króna': 'Coroa Islandesa',
    'Argentine peso': 'Peso Argentino', 'Chilean peso': 'Peso Chileno', 'Colombian peso': 'Peso Colombiano', 'Peruvian sol': 'Sol Peruano', 'Uruguayan peso': 'Peso Uruguaio', 
    'Paraguayan guaraní': 'Guarani Paraguaio', 'Bolivian boliviano': 'Boliviano Boliviano', 'Venezuelan bolívar soberano': 'Bolívar Venezuelano', 'Mexican peso': 'Peso Mexicano', 
    'Canadian dollar': 'Dólar Canadense', 'Jamaican dollar': 'Dólar Jamaicano', 'East Caribbean dollar': 'Dólar do Caribe Oriental',
    'Japanese yen': 'Iene Japonês', 'Chinese yuan': 'Yuan Chinês', 'Indian rupee': 'Rupia Indiana', 'Saudi riyal': 'Rial Saudita', 'Qatari riyal': 'Rial Catarense', 
    'Emirati dirham': 'Dirham dos Emirados', 'Turkish lira': 'Lira Turca', 'South Korean won': 'Won Sul-Coreano', 'Singapore dollar': 'Dólar de Singapura', 
    'Indonesian rupiah': 'Rupia Indonésia', 'Thai baht': 'Baht Tailandês', 'South African rand': 'Rand Sul-Africano', 'Egyptian pound': 'Libra Egípcia', 
    'Nigerian naira': 'Naira Nigeriana', 'Moroccan dirham': 'Dirham Marroquino', 'Polish złoty': 'Złoty Polonês', 'Czech koruna': 'Coroa Tcheca', 
    'Hungarian forint': 'Forint Húngaro', 'Romanian leu': 'Leu Romeno', 'Russian ruble': 'Rublo Russo', 'New Zealand dollar': 'Dólar neozelandês', 'Australian dollar': 'Dólar australiano',
    
    // IDIOMAS
    'English': 'Inglês', 'German': 'Alemão', 'French': 'Francês', 'Spanish': 'Espanhol', 'Italian': 'Italiano', 'Portuguese': 'Português', 
    'Russian': 'Russo', 'Chinese': 'Chinês', 'Japanese': 'Japonês', 'Arabic': 'Árabe', 'Hindi': 'Hindi', 'Bengali': 'Bengali', 'Dutch': 'Holandês', 
    'Greek': 'Grego', 'Swedish': 'Sueco', 'Norwegian': 'Norueguês', 'Finnish': 'Finlandês', 'Danish': 'Dinamarquês', 'Korean': 'Coreano', 
    'Turkish': 'Turco', 'Farsi': 'Farsi', 'Thai': 'Tailandês', 'Vietnamese': 'Vietnamita', 'Malay': 'Malaio', 'Swahili': 'Suaíli', 
    'Afrikaans': 'Afrikaans', 'Zulu': 'Zulu', 'Yoruba': 'Iorubá', 'Amharic': 'Amárico', 'Tagalog': 'Tagalo (Filipino)',
    
    // PAÍSES
    'Brazil': 'Brasil', 'United States of America': 'Estados Unidos da América', 'Canada': 'Canadá', 'Mexico': 'México', 'Argentina': 'Argentina',
    'Chile': 'Chile', 'Colombia': 'Colômbia', 'Peru': 'Peru', 'Uruguay': 'Uruguai', 'Paraguay': 'Paraguai', 'Bolivia': 'Bolívia', 'Venezuela': 'Venezuela',
    'Germany': 'Alemanha', 'France': 'França', 'United Kingdom': 'Reino Unido', 'Spain': 'Espanha', 'Italy': 'Itália', 'Portugal': 'Portugal',
    'China': 'China', 'India': 'Índia', 'Japan': 'Japão', 'South Korea': 'Coreia do Sul', 'Nigeria': 'Nigéria', 'South Africa': 'África do Sul', 
    'Egypt': 'Egito', 'Australia': 'Austrália', 'New Zealand': 'Nova Zelândia', 'Russia': 'Rússia', 'Ukraine': 'Ucrânia', 'Poland': 'Polônia',
    'Greece': 'Grécia', 'Turkey': 'Turquia', 'Saudi Arabia': 'Arábia Saudita', 'United Arab Emirates': 'Emirados Árabes Unidos', 'Israel': 'Israel',
    'Kenya': 'Quênia', 'Cuba': 'Cuba', 'Haiti': 'Haiti', 'Dominican Republic': 'República Dominicana', 'Jamaica': 'Jamaica', 'Ecuador': 'Equador',
    'Nepal': 'Nepal', 'Pakistan': 'Paquistão', 'Thailand': 'Tailândia', 'Vietnam': 'Vietnã', 'Indonesia': 'Indonésia', 'Philippines': 'Filipinas',
    'Singapore': 'Singapura', 'Qatar': 'Catar', 

    traduzir: (termo) => TRADUCOES[termo] || termo
};

let todosPaises = [];

const listaPaises = document.getElementById('lista-paises');
const detalhesPaisDiv = document.getElementById('detalhes-pais');
const secaoDetalhePais = document.getElementById('secao-detalhe-pais');
const rodape = document.querySelector('footer');
const btnVoltarAoTopo = document.getElementById('btnVoltarAoTopo');

const entradaBusca = document.getElementById('entrada-busca');
const filtroContinente = document.getElementById('filtro-continente');

async function buscarTodosPaises() {
    const url = `${URL_BASE_API}all?fields=${CAMPOS_NECESSARIOS}`;
    listaPaises.innerHTML = '<div class="col-12 text-center"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Carregando...</span></div></div>';
    
    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro de rede: ${resposta.status} ${resposta.statusText}`);
        }

        todosPaises = await resposta.json();
        ordenarEExibirPaises(todosPaises);
        inserirLog("all?fields", "Busca todos os 250 países da API");
    } catch (erro) {
        console.error("Erro ao buscar todos os países:", erro);
        listaPaises.innerHTML = '<p class="text-danger">Erro ao carregar a lista de países. Verifique a conexão ou o console para detalhes.</p>';
    }
}

function ordenarEExibirPaises(paises) {
    paises.sort((a, b) => {
        const nomeA = a.translations.por.common;
        const nomeB = b.translations.por.common;
        return nomeA.localeCompare(nomeB, 'pt', {sensitivity: 'base'});
    });
    exibirPaises(paises, listaPaises);
}

function filtrarPaises() {
    const termoBusca = entradaBusca.value.trim().toLowerCase();
    const continenteSelecionado = filtroContinente.value;
    
    let paisesFiltrados = todosPaises.filter(pais => {
        const nomePais = pais.translations.por.common.toLowerCase();
        const nomeContinente = pais.region;

        const correspondeBusca = nomePais.includes(termoBusca);
        const correspondeContinente = !continenteSelecionado || nomeContinente === continenteSelecionado;

        return correspondeBusca && correspondeContinente;
    });

    ordenarEExibirPaises(paisesFiltrados);
}


function exibirPaises(paises, elemento) {
    if (!paises || paises.length === 0) {
        elemento.innerHTML = '<p class="col-12">Nenhum país encontrado com os filtros aplicados.</p>';
        return;
    }

    elemento.innerHTML = paises.map(pais => `
        <div class="col">
            <div class="card card-country h-100 text-center" data-nome-pais-en="${pais.name.common}">
                <div class="card-body">
                    <img src="${pais.flags.svg}" class="flag-img mb-2" alt="Bandeira de ${pais.translations.por.common}">
                    <h5 class="card-title">${pais.translations.por.common}</h5>
                    <p class="card-text"><small class="text-muted">Capital: ${pais.capital ? pais.capital[0] : 'N/A'}</small></p>
                </div>
            </div>
        </div>
    `).join('');

    elemento.querySelectorAll('.card-country').forEach(card => {
        card.addEventListener('click', (evento) => {
            const nomePais = evento.currentTarget.dataset.nomePaisEn;
            buscarDetalhesPaisPorNome(nomePais);
            
            setTimeout(() => {
                document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 200); 
        });
    });
}

async function buscarDetalhesPaisPorNome(nome) {
    const url = `${URL_BASE_API}name/${encodeURIComponent(nome)}?fullText=true&fields=${CAMPOS_NECESSARIOS}`;
    detalhesPaisDiv.innerHTML = '<div class="col-12 text-center"><div class="spinner-border text-success" role="status"><span class="visually-hidden">Carregando...</span></div></div>';

    try {
        const resposta = await fetch(url);
        inserirLog("name", "Busca detalhes completos do país - " + nome);
        
        if (!resposta.ok) {
            const urlParcial = `${URL_BASE_API}name/${encodeURIComponent(nome)}?fields=${CAMPOS_NECESSARIOS}`;
            const respostaParcial = await fetch(urlParcial);
            
            if (!respostaParcial.ok) {
                detalhesPaisDiv.innerHTML = `<p class="text-warning">Detalhes para "${nome}" não encontrados. Tente outro país.</p>`;
                return;
            }
            const dadosParciais = await respostaParcial.json();
            exibirDetalhesPais(dadosParciais[0]);
        inserirLog("name", "Busca detalhes parciais do país - " + nome);
            return;
        }
        
        const dados = await resposta.json();
        exibirDetalhesPais(dados[0]);

    } catch (erro) {
        detalhesPaisDiv.innerHTML = '<p class="text-danger">Erro ao carregar detalhes do país.</p>';
    }
}

function exibirDetalhesPais(pais) {
    if (!pais) {
        detalhesPaisDiv.innerHTML = '<p class="text-warning">Detalhes do país não disponíveis.</p>';
        return;
    }

    const nomeTraduzido = pais.translations.por.common;
    const moedas = pais.currencies ? Object.values(pais.currencies).map(c => TRADUCOES.traduzir(c.name)).join(', ') : 'N/A';
    const linguas = pais.languages ? Object.values(pais.languages).map(l => TRADUCOES.traduzir(l)).join(', ') : 'N/A';
    const regiao = TRADUCOES.traduzir(pais.region);
    const subregiao = TRADUCOES.traduzir(pais.subregion);
    
    detalhesPaisDiv.innerHTML = `
        <div class="row">
            <div class="col-md-4 text-center">
                <img src="${pais.flags.svg}" class="img-fluid rounded country-flag-detail mb-3" alt="Bandeira de ${nomeTraduzido}">
            </div>
            <div class="col-md-8">
                <h3>${nomeTraduzido} (${pais.cca3})</h3>
                <p><strong>Nome Oficial:</strong> ${pais.name.official}</p>
                <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'N/A'}</p>
                <p><strong>Região:</strong> ${regiao} / ${subregiao}</p>
                <p><strong>População:</strong> ${pais.population.toLocaleString('pt-BR')}</p>
                <p><strong>Moedas:</strong> ${moedas}</p>
                <p><strong>Línguas:</strong> ${linguas}</p>
            </div>
        </div>
    `;
}

function configurarBotaoVoltarAoTopo() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnVoltarAoTopo.style.display = 'block';
        } else {
            btnVoltarAoTopo.style.display = 'none';
        }
    });

    btnVoltarAoTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    buscarTodosPaises();
    detalhesPaisDiv.innerHTML = '<p>Clique em um país acima para ver os detalhes aqui.</p>';
    configurarBotaoVoltarAoTopo();
    
    entradaBusca.addEventListener('input', filtrarPaises);
    filtroContinente.addEventListener('change', filtrarPaises);
});
