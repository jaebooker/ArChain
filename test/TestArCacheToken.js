var ArCacheToken = artifacts.require("ArCacheToken");

contract('ArCacheToken', function(accounts){

    it("Should make first account an owner", async () => {
        let instance = await ArCacheToken.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
        });
    });
    it("should return 0 tokens to owners account", async () => {
        let instance = await ArCacheToken.deployed();
        let owner = await instance.owner();
        let mint = await instance.mint();
        let balance = instance.balance();
        assert.equal(balance, 0);
        });
    });
    it("should return texture and shape representation in uints", async () => {
        let instance = await ArCacheToken.deployed();
        let owner = await instance.owner();
        let mint = await instance.mint();
        let mint = await instance.mint();
        let mint = await instance.mint();
        let objects = instance.getAllObjectsById();
        assert.equal(len(objects), 3);
        });
    });

  it("should put 0 tokens in the owners account", function(){
    return ArCacheToken.deployed().then(function(instance){
      instance.mint()
      return instance.balance.call(accounts[0]);
    }).then(function(balance){
      assert.equal(balance.valueOf(), 0, "Something went wrong");
    });
  });

  it("should return the caches texture and shape", function(){
    return ArCacheToken.deployed().then(function(instance){
      return instance.getObjectVisualFromId(uint id).call();
  }).then(function(instance){
      assert.equal(instance, "gold, sword", "shape and texture was not defined");
    });
  });
});
