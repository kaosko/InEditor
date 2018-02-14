/**
 * @author suheeeee <lalune1120@hotmaile.com>
 */

define([
], function(
  Subject
) {
  'use strict';

  /**
   * @desc
   * @class Cell
   */
  function Cell(id) {

    /**
    * @memberof Cell
    */
    this.id = id;

    /**
    * @memberof Cell
    */
    this.name = id;

    /**
    * @memberof Cell
    */
    this.corners = new Konva.Group({
      x: 0,
      y: 0
    });

    /**
    * @memberof Cell
    */
    this.poly = new Konva.Line({
      points: [],
      fill: '#00D2FF',
      stroke: 'black',
      opacity: 0.3,
      strokeWidth: 1,
      closed: true
    });
  }

  /**
  * @memberof Cell
  * @param {Object} x, y
  */
  Cell.prototype.addCorner = function(coor) {
    var rect = new Konva.Rect({
      x: coor.x,
      y: coor.y,
      width: 5,
      height: 5,
      fill: 'white',
      stroke: 'black',
      strokeWidth: 1
    });

    this.corners.add(rect);

    this.poly.points().push(coor.x, coor.y);
  }

  /**
  * @memberof Cell
  */
  Cell.prototype.deleteLastCorner = function(){

    this.corners.children[this.corners.children.length-1].destroy();

  }

  /**
  * @memberof Cell
  */
  Cell.prototype.deleteLastPolyLine = function(){

    this.poly.attrs.points = this.poly.attrs.points.slice(0, this.poly.attrs.points.length-2);

  }

  /**
  * @memberof Cell
  */
  Cell.prototype.getCornersObject = function() {

    return this.corners;

  }

  /**
  * @memberof Cell
  */
  Cell.prototype.getPolyObject = function(){

    return this.poly;

  }

  /**
  * @memberof Cell
  */
  Cell.prototype.getPointsOfCorners = function(){
    var points = [];
    var len = this.corners.children.length;

    for(var i = 0 ; i < len ; i ++){

      points.push(this.corners.children[i].attrs.x);
      points.push(this.corners.children[i].attrs.y);

    }

    return points;
  }

  Cell.prototype.destory = function(){

    this.corners.destroy();
    this.poly.destroy();

  }


  return Cell;

});