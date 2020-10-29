$(function(){

// 部分程式碼來自：[lodash](https://github.com/lodash/lodash)

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1
const CLONE_FLAT_FLAG = 2
const CLONE_SYMBOLS_FLAG = 4

/** `Object#toString` result references. */
const argsTag = '[object Arguments]'
const arrayTag = '[object Array]'
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const mapTag = '[object Map]'
const numberTag = '[object Number]'
const objectTag = '[object Object]'
const regexpTag = '[object RegExp]'
const setTag = '[object Set]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const weakMapTag = '[object WeakMap]'

const arrayBufferTag = '[object ArrayBuffer]'
const dataViewTag = '[object DataView]'
const float32Tag = '[object Float32Array]'
const float64Tag = '[object Float64Array]'
const int8Tag = '[object Int8Array]'
const int16Tag = '[object Int16Array]'
const int32Tag = '[object Int32Array]'
const uint8Tag = '[object Uint8Array]'
const uint8ClampedTag = '[object Uint8ClampedArray]'
const uint16Tag = '[object Uint16Array]'
const uint32Tag = '[object Uint32Array]'

/** Used to identify `toStringTag` values supported by `clone`. */
const cloneableTags = {}
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true
cloneableTags[errorTag] = cloneableTags[weakMapTag] = false



  const typed3 = new Typed('#typed', {
    strings: ['你知道嗎？<br>拖延...<br><br>可以拯救世界喔'],
    typeSpeed: 120,
    backSpeed: 50,
    loop: true,
    fadeOut: true,
  });

  $('.judge__gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.judge__nav'
  });
  
  $('.judge__nav').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.judge__gallery',
    autoplay: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }
    ]
  });

  window.addEventListener('load', function() {
    const insertionSort = (arr) => {
      const n = arr.length;
      
      // 假設第一個元素已經排好，所以從 1 開始跑
      for (let i = 1; i < n; i++) {
      
        // position 表示可以插入的位置
        let position = i;
      
        // 先把要插入的元素存起來
        const value = arr[i];
      
        // 開始往前找，只要符合這條件就代表這個位置是可以插入的
        // 邊找的時候就可以邊把元素往後挪，騰出空間
        while (i >= 0 && arr[position - 1] > value) {
          [arr[position], arr[position - 1]] = [arr[position - 1], arr[position]];
          position--;
        }
      
        // 找到適合的位置，放入元素
        arr[position] = value;
      }
      return arr;
    }

    const simpleMergeSort = (arr) => {
  
      // 合併
      const merge = (leftArray, rightArray) => {
        let result = [];
        let nowIndex = 0, left = 0, right = 0;
        const leftLength = leftArray.length;
        const rightLength = rightArray.length;
      
        // 如果左右兩邊都沒抓完，就看誰比較小抓誰
        while (left < leftLength && right < rightLength) {
          if (leftArray[left] < rightArray[right]) {
            result[nowIndex++] = leftArray[left++];
          } else {
            result[nowIndex++] = rightArray[right++];
          }
        }
      
        // 跑到這裡代表左右兩邊其中一邊抓完了
        // 如果是左邊沒抓完，全部抓下來
        while (left < leftLength) {
          result[nowIndex++] = leftArray[left++];
        }
      
        // 右邊沒抓完，全部抓下來
        while (right < rightLength) {
          result[nowIndex++] = rightArray[right++];
        }
      
        // 把合併好的陣列直接傳回去
        return result;
      }
      const _mergeSort = (arr) => {
        const length = arr.length;
        if (length <= 1) return arr;
      
        // 切兩半
        const middle = Math.floor(length / 2);
      
        // 排左邊
        const leftArray = _mergeSort(arr.slice(0, middle));
      
        // 排右邊
        const rightArray = _mergeSort(arr.slice(middle, length));
      
        // 合併後丟回去
        return merge(leftArray, rightArray);
      }
      return _mergeSort(arr);
    }
  })

    window.addEventListener("hashchange", function (event) {
      event.preventDefault();
      const url = location.hash.substr(1);
      const target = document.querySelector(`.${url}`).offsetTop - 60;
      window.scrollTo({
        top: target,
        left: 0,
        behavior: 'smooth' // => 滑動效果
      });
      function heapSort (arr) {  
        function heapify(arr, length, node) {
          const left = node * 2 + 1;
          const right = node * 2 + 2;
        
          // 先預設最大的節點是自己
          let max = node;
        
          if (left < length && arr[left] > arr[max]) {
            max = left;
          }
        
          if (right < length && arr[right] > arr[max]) {
            max = right;
          }
        
          // 如果左右兩邊有任何一個比 node 大的話
          if (max !== node) {
            // 就把兩個互換
            [arr[node], arr[max]] = [arr[max], arr[node]];
        
            // 接著繼續 heapfiy
            heapify(arr, length, max);
          }
        }
        
        // build max heap
        const length = arr.length;
        for (let i = Math.floor(length / 2) - 1; i>=0; i--) {
          heapify(arr, length, i);
        }
        
        // 排序
        for (let i = length - 1; i > 0; i--) {
          [arr[0], arr[i]] = [arr[i], arr[0]];
          heapify(arr, i, 0);
        }
        return arr;
      }
  });
  
  
  /*
  nav 縮小
  from: https://benmarshall.me/attaching-javascript-handlers-to-scroll-events/
  */
  document.addEventListener('wheel', () => {
    if (window.scrollY > 50) {
      document.querySelector('.nav').classList.add('nav-scrolled')
    } else {
      document.querySelector('.nav').classList.remove('nav-scrolled')
    }
  }, {capture: false, passive: true })

  function run() {
    function quickSort (arr) {
      const swap = (array, i , j) => {
        [array[i], array[j]] = [array[j], array[i]];
      }
      const partition = (array, start, end) => {
        let splitIndex = start + 1;
        for (let i = start + 1; i <= end; i++) {
          if (array[i] < array[start]) {
            swap(array, i, splitIndex);
            splitIndex++;
          }
        }
      
        // 記得把 pivot 跟最後一個比它小的元素互換
        swap(array, start, splitIndex - 1);
        return splitIndex - 1;
      }
      const _quickSort = (array, start, end) => {
        if (start >= end) return array;
      
        // 在 partition 裡面調整數列，並且回傳 pivot 的 index
        const middle = partition(array, start, end);
        _quickSort(array, start, middle - 1);
        _quickSort(array, middle + 1, end);
        return array;
      };
      return _quickSort(arr, 0, arr.length - 1);
    }

  }
});

