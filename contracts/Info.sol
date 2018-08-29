pragma solidity ^0.4.21;

contract Info {
    string fName;
    uint age;

    event Instructor(
        string name,
        uint age
    );

    function setInfo(string _fName, uint _age) public {
        fName = _fName;
        age = _age;
        emit Instructor(_fName, _age);
    }

    function getInfo() public view returns (string, uint) {
        return (fName, age);
    }
}