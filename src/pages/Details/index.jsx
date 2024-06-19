import { Container,Links,Content,} from './styles';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';





export function Details(){
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonText title="Excluir nota"/>

                    <h1>
                        Introdução ao React
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora facere eos iure officiis officia adipisci, autem suscipit, tempore odit recusandae eligendi sapiente rerum hic illum obcaecati? Error, repellat dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere facilis recusandae sunt commodi et quis. Et eligendi odio commodi repudiandae. Consequatur, sit quibusdam. Repellat dignissimos delectus, ut debitis magni autem!
                    </p>
                        <Section title="Links úteis">
                            <Links>
                                <li><a href="#">https://wwww.rocketseat.com.br/</a></li>
                                <li><a href="#">https://wwww.rocketseat.com.br/</a></li>
                            </Links>
                        </Section>
                        <Section title="Marcadores">
                            <Links>
                                <Tag title="express"></Tag>
                                <Tag title="nodejs"></Tag>
                            </Links>
                        </Section>
                    <Button title="Voltar"/>
                </Content>
            </main>
        </Container>
    )
}







