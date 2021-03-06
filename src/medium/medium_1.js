import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0 
    for (let i = 0; i< array.length; i++) {
        sum = sum + Number(array[i]);
    }
    return sum 
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    let lengthval = array.length;

    //let returnval = lengthval
    // If length = odd
    if (lengthval % 2 == 1) {
        let returnval = array[(lengthval / 2) - .5]
        return returnval
    }
    else {              
        let returnval = ((array[lengthval / 2] + array[(lengthval / 2) - 1])/ 2);
        return returnval
    }
}



/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    const returnobject = new Object();
    returnobject.length = array.length
    returnobject.sum = getSum(array)
    let mean = getSum(array)/array.length
    returnobject.mean = mean
    returnobject.median=getMedian(array)
    let minimum = 100
    let maximum = -100
    for (let i = 0; i < array.length; i++) {
         if (array[i] < minimum){
             minimum = array[i]
         }

         if (array[i] > maximum){
            maximum = array[i]
        }
    }

    returnobject.min=minimum
    returnobject.max=maximum
    let varianceval = variance(array, mean)
    returnobject.variance=varianceval
    returnobject.standard_deviation=Math.sqrt(varianceval)
    
    return returnobject
    

}

