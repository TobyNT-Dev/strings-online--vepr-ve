import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AppService from '../Appservices/Appservice'

export const ProductNav = () => {
  const [list, setList] = useState([])
  const [expandedCatId, setExpandedCatId] = useState([])


  const expand = id => {
    setExpandedCatId(id === expandedCatId ? null : id)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AppService.GetList("productgroups")
        setList(response.data.items)
      } catch (error) {
        console.error(error)
      }
    };

    fetchData()
  }, [])

  return (
    <StyledProductsList>
      {list.map(category => (
        <li key={category.id}>
          <div onClick={() => expand(category.id)}>
            {category.title}
          </div>
          {expandedCatId === category.id && (
            <ul>
              {category.subgroups.map(subgroups => (
                <li key={subgroups.id}>{subgroups.title}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </StyledProductsList>
  )
}

const StyledProductsList = styled.ul`
grid-area: LIST;
color: white;
list-style-type: none;
background-color: ${(props) => props.theme.colors.interactionBack};
padding: 0.5vw;
width: min-content;
border: ${(props) => props.theme.colors.darkInteraction} 1px solid;
div {
  margin: 0.4vw 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.interaction};
}
ul {
  margin: 0vw 0.5vw;
  list-style-type: none;
  padding: 0vw;
  li {
    color: ${(props) => props.theme.colors.interaction};
    cursor: pointer;
    margin: 0.4vw 0 0.4vw 0.5vw;
  }
}
`