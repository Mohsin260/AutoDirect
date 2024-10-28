"use client";

import FilterPanel from "@/components/InventoryComponents/InventoryFilters/SideFiltersPanel/FiltersPanel";
// import InventoryFeaturesFilter from "@/components/InventoryComponents/InventoryFeaturesFilter";
import InventoryFilters from "@/components/InventoryComponents/InventoryFilters/SortByFilterOptions";
import InventoryView from "@/components/InventoryComponents/InventoryView";
import TradeInBanner from "@/components/InventoryComponents/TradeInBanner";

const Inventory = () => {
  return (
    <main className="flex flex-col">
      <div id="inventory-index" class="position-relative">
        <TradeInBanner />
        {/* Inventory Filter Sections */}
        <InventoryFilters />
        <div class="mb-5 container">
          <div class="row">
            <FilterPanel />
            <InventoryView />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inventory;
