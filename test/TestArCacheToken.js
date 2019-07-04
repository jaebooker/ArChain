var ArCacheToken = artifacts.require("ArCacheToken");

contract('ArCacheToken', function(accounts){

  it("should put 1 token in the owners account", function(){
    return ArCacheToken.deployed().then(function(instance){
      return instance.balance.call(accounts[0]);
    }).then(function(balance){
      assert.equal(balance.valueOf(), 1, "Token not retrieved");
    });
  });

  it("should return the caches texture and shape", function(){
    return ArCacheToken.deployed().then(function(instance){
      return instance.getName.call();
    }).then(function(name){
      assert.equal(name, "gold, sword", "shape and texture was not defined");
    });
  });

  it("should return the texture gold", function(){
    return ArCacheToken.deployed().then(function(instance){
      return instance.setTexture('Gold').then(function(){
        return instance.getName.call();
      }).then(function(name){
        assert.equal(name, "Gold", "the texture was not gold");
      });
    });
  });
});
