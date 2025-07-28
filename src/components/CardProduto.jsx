/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'

// estilos do conteiner 
const estilos = {
    // container
    container: css`
    display: flex;
    justify-content: space-around;
    padding: 16px;
    flex-wrap: wrap;
    gap: 16px;
  `,
    // div do card
    card: css`
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 16px;
    width: 320px;
    max-width: 100%;
    min-height: 200px;
  `,
    titulo: css`
    font-size: 1.5rem;
    margin-bottom: 16px;
    color: #4f46e5;
    text-align: center;
  `,
}

// aqui e os estilos do bloco do item
const estilosItem = {
    // div do item 
    item: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
    padding: 16px 0;

    &:last-child {
      border-bottom: none;
    }
  `,

    nome: css`
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 4px;
  `,

    preco: css`
    font-size: 1rem;
    font-weight: 500;
    color: #10b981;
    margin: 0 0 8px;
  `,
    // botao alternando entre as cores 
    botao: (adicionado) => css`
    background-color: ${adicionado ? '#198754' : '#6c757d'};
    margin-top: 8px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    color: white;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${adicionado ? '#157347' : '#5c636a'};
    }
  `,
}

const CardProduto = () => {
    const [carrinho, setCarrinho] = useState([])

    const lista = [
        { nome: 'Playstation 6', preco: 2999 },
        { nome: 'Guitarra', preco: 699 },
    ]

    const handleClick = (p) => {
        const jaAdicionado = carrinho.some((i) => i.nome === p.nome)

        if (jaAdicionado) {
            setCarrinho((prev) => prev.filter((i) => i.nome !== p.nome))
        } else {
            setCarrinho((prev) => [...prev, p])
        }
    }

    return (
        <div css={estilos.container}>
            <div css={estilos.card}>
                <h1 css={estilos.titulo}>Carrinho</h1>

                {lista.map(p => {
                    const adicionado = carrinho.some((i) => i.nome === p.nome)

                    return (
                        <div css={estilosItem.item} key={p.nome}>
                            <p css={estilosItem.nome}>{p.nome}</p>
                            <p css={estilosItem.preco}>R$ {p.preco.toFixed(2)}</p>
                            <button
                                css={estilosItem.botao(adicionado)}
                                type="button"
                                onClick={() => handleClick(p)}
                            >
                                {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardProduto
