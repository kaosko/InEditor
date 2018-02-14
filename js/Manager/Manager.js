/**
* @author suheeeee <lalune1120@hotmaile.com>
*/

define([
  "../PubSub/Subscriber.js"
],function(
  Subscriber
) {
  'use strict';

  /**
  * @class Manager
  */
  function Manager(){

    Subscriber.apply(this, arguments);

    /**
    * requests
    * @deprecated
    */
    this.reqs = {};

  }

  Manager.prototype = Object.create(Subscriber.prototype);

  Manager.prototype.init = function(){

  }

  /**
  * requests
  * @deprecated
  */
  Manager.prototype.addReq = function(obj){

    this.reqs = obj;

  }


  return Manager;
});