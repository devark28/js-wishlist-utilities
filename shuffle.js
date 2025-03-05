function shuffle(arr){
	set1 = new Set();
	while(set1.size !== arr.length){
		set1.add(Math.floor(Math.random() * arr.length));
  	}
	return [...set1].map(p => arr[p]);
}
console.log('input:', [1, 2, 3, 4, 5, 6]);
console.log('shuff:', shuffle([1, 2, 3, 4, 5, 6]));

function _shuffle(arr){
	arr2 = Array(arr.length).fill(null);
	arr2.forEach((n, i) => {
		pos = Math.floor(Math.random() * arr.length);
		while(true){
			if(!arr2.includes(pos)){
				arr2[i] = pos;
				break;
			}
			pos = Math.floor(Math.random() * arr.length);
		}
	})
	return arr2.map(p => arr[p]);
}
console.log('input:', [1, 2, 3, 4, 5, 6]);
console.log('shuff:', _shuffle([1, 2, 3, 4, 5, 6]));
