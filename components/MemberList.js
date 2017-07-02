import { gql, graphql } from 'react-apollo'

const MemberList = ({ data: { allMembers, loading } }) => {
  if (allMembers && allMembers.length) {
    return (
      <ul>
        {allMembers.map((member, index) =>
          <li key={member.id}>
            <strong>{member.name}</strong>
            <div>{member.email}</div>
            <br/>
          </li>
        )}
      </ul>
    )
  }

  return <div>Loading</div>
}

const allMembers = gql`
  query allMembers {
    allMembers(orderBy: createdAt_DESC) {
      id
      name
      email
      createdAt
    }
  }
`

export default graphql(allMembers)(MemberList)
