function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inorder = inorder;
    this.preorder = Preorder;
    this.postorder = Postorder;
    this.findMin = findMin;
    this.findMax = findMax;
    this.search = search;

}

function insert(data) {

    var n = new Node(data, null, null);

    console.log(n);

    if (this.root === null) {
        this.root = n;
    } else {

        var current = this.root;
        var parent;

        while (true) {

            parent = current;

            if (data < current.data) {

                current = current.left;

                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {

                current = current.right;

                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }

    console.log(this.root)
}


function inorder(node) {
    if (!(node == null)) {
        inorder(node.left);
        console.log(node.show());
        inorder(node.right);
    }

}


function Preorder(node) {
    if (!(node == null)) {
        console.log(node.show());
        Preorder(node.left);
        Preorder(node.right);
    }
}

function Postorder(node) {
    if (!(node == null)) {
        console.log(node.show());
        Postorder(node.left);
        Postorder(node.right);
    }
}

function findMin() {

    var current = this.root;
    if (current) {
        while (true) {

            if (current.left !== null) {
                console.log('^^')
                current = current.left;
            } else {
                return (current.data);
                break;
            }
        }
    } else {
        return 'tree empty:)'
    }


}


function findMax() {

    var current = this.root;
    if (current) {
        while (true) {

            if (current.right !== null) {
                console.log('^^')
                current = current.right;
            } else {
                return (current.data);
                break;
            }
        }
    } else {
        return 'tree empty:)'
    }

}


function search(data){
	var current = this.root;
	while(current.data !== data){
		if(data < current.data ){
			current = current.left;
		}else{
			current = current.right;
		}

		if(current == null){
			return null;
		}

	}
	return current;
}




var bst = new BST();
//3 16 22 23 37 45 99
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.inorder(bst.root)
console.log("------------------------- ");
bst.preorder(bst.root);
console.log("Min element", bst.findMin());
console.log("Max element", bst.findMax());
console.log("search element(99) ", bst.search(99))
