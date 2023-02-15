import { useState } from 'react';
import VotingResCard from '../votingResCard/VotingResCard';

const parties = [{name: 'cows',img:'https://w7.pngwing.com/pngs/458/410/png-transparent-cartoon-cow-cartoon-bell-hand-painted-thumbnail.png'},{name: 'dogs', img:'https://i.pinimg.com/474x/1d/7a/bb/1d7abbca56d491a9425586ca9eaf4918.jpg'},{name: 'cats',img:'https://img.lovepik.com/element/40019/1554.png_300.png'},{name: 'lions',img:'https://toppng.com/uploads/preview/lion-cartoon-pictures-of-lio-115633322420iembnohnh.png'}]
export default function Vote(props){
    const [voteObj, setVoteObj] = useState(JSON.parse(localStorage.getItem('voteObj')) || {})
    function handleVote(partyName){
        if(partyName in voteObj){
            setVoteObj({...voteObj,...{[partyName]:voteObj[partyName] + 1}})
        } else {

            setVoteObj({...voteObj,...{[partyName]:1}})
        }
        localStorage.setItem('voteObj',JSON.stringify(voteObj))
        props.setHasVoted(true)
    }
    return <>
        <h1>voting</h1>
        <div className="currentVoteRes">
            {parties.map((party)=>{
                return <VotingResCard  isResCard={true} key={party.name} partyName={party.name} imgSrc={party.img} totalVotes={voteObj[party.name] || 0} />
            })}
        </div>
        <div className="votingContainer">
            <h2>vote!</h2>
            {parties.map((party)=>{
                return <button key={party.name} onClick={()=>{handleVote(party.name)}}>
                    <VotingResCard  partyName={party.name} imgSrc={party.img} totalVotes={voteObj[party.name] || 0} />
                </button>
            })}
        </div>
    </>

}