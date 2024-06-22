import { Container,StarsContainer } from './styles';
import {Tag} from '../../components/Tag'
import { IoMdStar } from "react-icons/io";


export function Note({data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <StarsContainer>
                {[...Array(5)].map((_, index) => (
                    <IoMdStar key={index} color={index < data.rating ? "#FFD700" : "#FF859B"} />
                ))}
            </StarsContainer>

            <p>{data.text}</p>
           

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag =><Tag key={tag.id} title={tag.name}/>)
                                
                          
                     
                    }
                </footer>
            }
            
            
        </Container>
    )
}
