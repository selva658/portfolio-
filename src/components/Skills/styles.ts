import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    margin-left:3%
  }
  .hability{
    img{
      width: 9rem;
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
      .Myproject{
        display:none
       }
    }
   
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
      .Myproject{
       display:none
      }
    }
    .hard-skills{
      margin-left:15%
    }
  
  }
`