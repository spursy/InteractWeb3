const InfoContract = artifacts.require('Info');

contract('InfoContract', function() {
    it('should return set params', async function(){        
        let instance = await InfoContract.deployed();
        await instance.setInfo("yy", 18);
        let ret = await instance.getInfo();
        console.log(JSON.stringify(ret));
        
        assert.equal(ret[0], "yy", "successfully");
    });
});