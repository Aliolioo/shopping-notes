export default function Footer({items}) {
  const totalItems = items.length;
  const purchasedItems = items.filter((item) => item.checked).length;
  const percentage = totalItems > 0 ? Math.round((purchasedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      There are {totalItems} items in the shopping list, {purchasedItems} items have been purchased ({percentage}%)
    </footer>
  );
}