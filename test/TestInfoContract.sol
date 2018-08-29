pragma solidity ^0.4.21;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Info.sol";

contract TestInfoContract {
    function testInfoContract() {
        Info info_contract = Info(DeployedAddresses.Info());
        info_contract.setInfo("spursyy", 20);
        Assert.equal(info_contract.getInfo(), "spursyy", "Get info is the same with set info.");
    }    
}