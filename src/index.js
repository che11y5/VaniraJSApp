import "./styles.css";

const onClickAdd = () => {
  // idにadd-textをもつ要素のvalueを受け取り、空文字を返す
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
// 未完了リストへ追加する関数
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
// 未完了リストから削除する関数
const deleteIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
const deleteCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};
// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
  // 完了ボタン追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteIncompleteList(deleteButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    // buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを未完了リストから削除
      deleteCompleteList(backButton.parentNode);
      createIncompleteList(text);
    });

    // divタグの子要素に追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });
  // 削除ボタン追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};
