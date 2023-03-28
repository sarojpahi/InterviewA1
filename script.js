const input = document.getElementById("inputBox");
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("inputBox");
  const arr = input.value.trim().split(",");
  const tree = buildBinaryTree(arr);
  document.getElementById("tree").innerHTML = "";
  drawBinaryTree(tree, 1);
});

function buildBinaryTree(arr) {
  return buildTreeHelper(arr, 0, null);
}
function buildTreeHelper(arr, index, parent) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }
  const node = {
    value: arr[index],
    left: null,
    right: null,
  };
  if (parent) {
    if (index % 2 === 1) {
      parent.left = node;
    } else {
      parent.right = node;
    }
  }
  buildTreeHelper(arr, index * 2 + 1, node);
  buildTreeHelper(arr, index * 2 + 2, node);
  return node;
}

function drawBinaryTree(node, depth) {
  if (node == null) {
    return;
  }
  const element = document.createElement("div");
  element.innerText = node.value;
  element.className = "node";
  element.addEventListener("click", () => {
    highlightPath(node);
  });
  const leftMargin = 2 ** (depth - 1) * 40;
  element.style.marginLeft = `${leftMargin}px`;
  const rightMargin = 2 ** (depth - 1) * 40;
  element.style.marginRight = `${rightMargin}px`;
  document.getElementById("tree").appendChild(element);
  drawBinaryTree(node.left, depth + 1);
  drawBinaryTree(node.right, depth + 1);
}

function highlightPath(node) {}
