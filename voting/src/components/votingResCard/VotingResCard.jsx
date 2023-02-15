export default function VotingResCard(props){
    return <div id='votingResContainer'>
        <h3>{props.partyName}</h3>
        <img src={props.imgSrc} alt="" width="50px" height="50px"/>
        {props.isResCard && <h5>Current total Votes: {props.totalVotes}</h5>}
    </div>
}