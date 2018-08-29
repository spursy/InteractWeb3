App = {
    web3Provider: null,
    contracts: {},

    init: function() {
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
          } else {
            App.web3Provider = new Web3.providers.HttpProvider('http://193.112.195.120:8545');
          }
          web3 = new Web3(App.web3Provider);
      
          return this.initContract();
    },
    initContract: function() {
        // 加载Adoption.json，保存了Adoption的ABI（接口说明）信息及部署后的网络(地址)信息，它在编译合约的时候生成ABI，在部署的时候追加网络信息
        $.getJSON('Info.json', function(data) {
          var InfoArtifact = data;
          App.contracts.Info = TruffleContract(InfoArtifact);
          // Set the provider for our contract
          App.contracts.Info.setProvider(App.web3Provider);
        });
      },
}

$(function() {
    $(function() {
        App.init();
      });
});