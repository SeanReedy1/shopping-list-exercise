function addItem() {
    $(".submit").click(function(event){
        
        event.preventDefault();
        let entry=$("#shopping-list-entry").val();
        let addedItem=`<li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
        
        
        $(".shopping-list").append(addedItem)
    })
}

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
       e.preventDefault();
       let parent=$(this).closest('li');
       parent.remove();
      });
}

function checkItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        e.preventDefault();
        let target=$(this).closest('li').find('.shopping-item');
        target.toggleClass('shopping-item__checked');
    })
}

function runFunctions(){
    addItem();
    deleteItem();
    checkItem();
}

$(runFunctions);