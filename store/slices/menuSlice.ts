import {
  ColorPalette,
  RestaurantInfo,
  MenuSlice,
  MenuSection,
  MenuProduct,
} from "@/types/menu";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

export function createSectionId() {
  return `section-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
function createProductId() {
  return `product-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
export function createProductIdPublic() {
  return createProductId();
}
function createEmptyProduct(id?: string): MenuProduct {
  return {
    id: id ?? createProductId(),
    name: "",
    nameTranslation: "",
    description: "",
    descriptionTranslation: "",
    price: "",
    image: null,
    allergens: [],
  };
}
function createEmptySection(id?: string): MenuSection {
  return {
    id: id ?? createSectionId(),
    name: "",
    nameTranslation: "",
    description: "",
    descriptionTranslation: "",
    products: [],
  };
}

/** Stable ID for the initial section so server and client HTML match (SSR hydration). */
const INITIAL_SECTION_ID = "section-initial";

const palette = [
  {
    primary: "#6594FF",
    secondary: "#FFFFFF",
  },
  {
    primary: "#ECEDF1",
    secondary: "#232321",
  },
  {
    primary: "#ECECF0",
    secondary: "#6594FF",
  },
  {
    primary: "#DAEBF6",
    secondary: "#6594FF",
  },
  {
    primary: "#B69EDE",
    secondary: "#FFFFFF",
  },
  {
    primary: "#6ECD9D",
    secondary: "#242420",
  },
  {
    primary: "#FACB67",
    secondary: "#FFFFFF",
  },
];

const initialState: MenuSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  restaurantInfo: {
    name: "",
    description: "",
    image: null,
  },
  welcomeScreen: "",
  qrCodeName: "",
  isPreviewWelcomeScreen: false,
  sections: [createEmptySection(INITIAL_SECTION_ID)],
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    setColorPalette: (
      state,
      action: PayloadAction<{ index: number; color: ColorPalette }>,
    ) => {
      state.colorPalette[action.payload.index] = action.payload.color;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    setRestaurantInfo: (state, action: PayloadAction<RestaurantInfo>) => {
      state.restaurantInfo = action.payload;
    },
    setWelcomeScreen: (state, action: PayloadAction<string>) => {
      state.welcomeScreen = action.payload;
    },
    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
    },
    setIsPreviewWelcomeScreen: (state, action: PayloadAction<boolean>) => {
      state.isPreviewWelcomeScreen = action.payload;
    },
    // Sections
    addSection: (state, action: PayloadAction<string | undefined>) => {
      const id = action.payload ?? createSectionId();
      state.sections.push(createEmptySection(id));
    },
    removeSection: (state, action: PayloadAction<string>) => {
      state.sections = state.sections.filter((s) => s.id !== action.payload);
    },
    updateSection: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Omit<MenuSection, "id" | "products">> }>,
    ) => {
      const section = state.sections.find((s) => s.id === action.payload.id);
      if (section) {
        Object.assign(section, action.payload.updates);
      }
    },
    reorderSections: (state, action: PayloadAction<{ fromIndex: number; toIndex: number }>) => {
      const { fromIndex, toIndex } = action.payload;
      const [removed] = state.sections.splice(fromIndex, 1);
      state.sections.splice(toIndex, 0, removed);
    },
    setSectionsOrder: (state, action: PayloadAction<{ orderedIds: string[] }>) => {
      const { orderedIds } = action.payload;
      const plainSections = current(state.sections);
      const byId = new Map(plainSections.map((s) => [s.id, s]));
      const newOrder = orderedIds
        .map((id) => byId.get(id))
        .filter((s): s is MenuSection => s != null);
      state.sections = newOrder;
    },
    // Products within a section
    addProduct: (
      state,
      action: PayloadAction<{ sectionId: string; productId?: string }>,
    ) => {
      const { sectionId, productId } =
        typeof action.payload === "string"
          ? { sectionId: action.payload, productId: undefined }
          : action.payload;
      const section = state.sections.find((s) => s.id === sectionId);
      if (section) {
        section.products.push(createEmptyProduct(productId));
      }
    },
    removeProduct: (
      state,
      action: PayloadAction<{ sectionId: string; productId: string }>,
    ) => {
      const section = state.sections.find((s) => s.id === action.payload.sectionId);
      if (section) {
        section.products = section.products.filter(
          (p) => p.id !== action.payload.productId,
        );
      }
    },
    updateProduct: (
      state,
      action: PayloadAction<{
        sectionId: string;
        productId: string;
        updates: Partial<Omit<MenuProduct, "id">>;
      }>,
    ) => {
      const section = state.sections.find((s) => s.id === action.payload.sectionId);
      const product = section?.products.find((p) => p.id === action.payload.productId);
      if (product) {
        Object.assign(product, action.payload.updates);
      }
    },
    reorderProducts: (
      state,
      action: PayloadAction<{
        sectionId: string;
        fromIndex: number;
        toIndex: number;
      }>,
    ) => {
      const section = state.sections.find((s) => s.id === action.payload.sectionId);
      if (section) {
        const { fromIndex, toIndex } = action.payload;
        const [removed] = section.products.splice(fromIndex, 1);
        section.products.splice(toIndex, 0, removed);
      }
    },
    setProductsOrder: (
      state,
      action: PayloadAction<{ sectionId: string; orderedIds: string[] }>,
    ) => {
      const section = state.sections.find((s) => s.id === action.payload.sectionId);
      if (section) {
        const { orderedIds } = action.payload;
        const plainProducts = current(section.products);
        const byId = new Map(plainProducts.map((p) => [p.id, p]));
        const newOrder = orderedIds
          .map((id) => byId.get(id))
          .filter((p): p is MenuProduct => p != null);
        section.products = newOrder;
      }
    },
  },
});

export const {
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setRestaurantInfo,
  setWelcomeScreen,
  setQrCodeName,
  setIsPreviewWelcomeScreen,
  addSection,
  removeSection,
  updateSection,
  reorderSections,
  setSectionsOrder,
  addProduct,
  removeProduct,
  updateProduct,
  reorderProducts,
  setProductsOrder,
} = menuSlice.actions;
export default menuSlice.reducer;
