pragma solidity ^0.8.18;
error _CandidateAlreadyExit();
error _AlreadyVoted();
error _CandidateNotVoteItSelf();
contract BlockchainVoting {
    address Manager;
    uint256 TotalCandicates;
    uint256 TotalVoters;
    constructor(){
        Manager = msg.sender;
    }
    struct voter {
        uint256 Id;
        string name;
        address voterAddress;
        address _CandidateAddress;
    }
    struct Candidate {
        string name;
        address _CandidateAddress;
        uint vote;
    }
    struct propsal {
        string name;
        address _CandidateAddress;
    }
    voter[] voters;
    Candidate[] Candidates;
    propsal[] propsals;
    function SetCandidate(
        address _Address,
        string memory _name
    ) external OnlyManager {

        for (uint256 i=0;i<Candidates.Length;i++){
            if (Candidates[i]._CandidateAddress==_Address){
                revert _CandidateAlreadyExit();
            }else{}
        }
        Candidate.push(Candidate(_name, _Address,0));
        TotalCandidate++;
    }
    function SetVote(
        uint256 _Id,
        string memory _name,
        address _CandidateAddress
    )external {
        require(
            Candidate.Length >= 2,
            "Candidate greater then 2 or Must be 2"
        );
        for (uint256 i=0; i< voters.Length; i++){
            if(
                voters[i].id == _Id && voters[i].voterAddress == _voterAddress
            ){
                revert _AlreadyVoted();
            }
        }
        for (uint256 i=0; i< Candidates.Length;i++){
            if (Candidates[i]._CandidateAddress == _voterAddress){
                revert _CandidateNotVoteItSelf();
            }
        }
        for (uint i;i < Candidates.Length;i++) {
            if (Candidates[i]._CandidateAddress == _CandidateAddress) {
                Candidate[i].vote++;
                voters.push(
                    voter (_Id, _name, _voterAddress, _CandidateAddress)
                );
                TotalVoters++;
            }
        }
    }
    function RequestForNextVoting(
        address _requestAddress,
        string memory _name
    )external {
        propsals.push(propsal(_name, _requestAddress));
    }
    function getRequestPropsal() external view returns (propsal[] memory) {
        return propsals;
    }
    function getCandidate() external view returns (Candidate[] memory){
        return Candidates;
    }
    function getVoter() external view returns (voter[] memory) {
        return voters;
    }
    modifier Onlymanger() {
        require(msg.sender == Manger);
        _;
    }
}
