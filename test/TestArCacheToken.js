var ArCacheToken = artifacts.require("ArCacheToken");

contract('ArCacheToken', function(accounts){

    it("Should make first account an owner", async () => {
        let instance = await ArCacheToken.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
        });
    });
    it("Should return 0 tokens to owners account", async () => {
        let instance = await ArCacheToken.deployed();
        let owner = await instance.owner();
        let mint = await instance.mint();
        let balance = instance.balanceOf(accounts[0]);
        assert.equal(balance, 0);
        });
    });
    it("Should return objects after being minted", async () => {
        let instance = await ArCacheToken.deployed();
        let owner = await instance.owner();
        let mint = await instance.mint();
        let mint = await instance.mint();
        let mint = await instance.mint();
        let ar_objects = await instance.objects;
        assert.equal(len(ar_objects), 3);
        });
    });
    it("Should be unable to put tokens in account, without _private_address", async () => {
        let instance = await ArCacheToken.deployed();
        let owner = await instance.owner();
        let mint = await instance.mint();
        let ar_objects = await instance.objects;
        await instance.transferFrom(accounts[0],accounts[0],ar_objects[0]);
        let balance = instance.balanceOf(accounts[0]);
        assert.equal(balance, 0);
        });
    });



  // it("should put 0 tokens in the owners account", function(){
  //   return ArCacheToken.deployed().then(function(instance){
  //     instance.mint()
  //     return instance.balance.call(accounts[0]);
  //   }).then(function(balance){
  //     assert.equal(balance.valueOf(), 0, "Something went wrong");
  //   });
  // });
  //
  // it("should return the caches texture and shape", function(){
  //   return ArCacheToken.deployed().then(function(instance){
  //     return instance.getObjectVisualFromId(uint id).call();
  // }).then(function(instance){
  //     assert.equal(instance, "gold, sword", "shape and texture was not defined");
  //   });
  // });
});
