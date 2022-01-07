Fetch:
  --createItem(item) -> single item
  --deleteAllItems() -> delete all
  --getItems() -> get all per user
  --buyItems(id) -> complete task `boolean`

JS:
  --displayShoppingListItems() -> fetch/clear/re-display
    --/// click item to "buy" -> update state
    --/// click delete button -> clear/update state

Render:
  --renderItem(item) -> takes item/returns DOM

HTML:
  --quantity, item name, add button
  --delete all button
  --div for items