import React, { useState } from 'react';

import SearchBox from './SearchBox';
import Navbar from './Navbar';
import Button from '../../Button';
import { Form, FormLine, Input } from '../../Form';
import Navlink from '../Navlink';
import HeaderItem from './HeaderItem';

import * as S from './styled';

const Home = () => {
  const [busca, setBusca] = useState('');
  const [cartVisibility, setCartVisibility] = useState(false);

  return (
    <S.Header>
      <S.Logo to="/">Logo</S.Logo>
      <S.SearchContainer>
        <Form>
          <FormLine>
            <Input
              type="search"
              placeholder="Pesquise por produtos ou categorias..."
              value={busca}
              onChange={e => setBusca(e.target.value)}
            />
            <Button type="submit">Pesquisar</Button>
          </FormLine>
        </Form>
        <SearchBox busca={busca} />
      </S.SearchContainer>

      <HeaderItem icon="usuario">Minha Conta</HeaderItem>
      <HeaderItem
        icon="carrinho"
        showCart={cartVisibility}
        onClick={() => setCartVisibility(!cartVisibility)}
      >
        Carrinho
      </HeaderItem>

      <Navbar>
        <Navlink exact to="/">
          Home
        </Navlink>
        <Navlink to="/categoria/1">Categoria 1</Navlink>
        <Navlink to="/categoria/2">Categoria 2</Navlink>
      </Navbar>
    </S.Header>
  );
};

export default Home;
