import { useMemo } from "react";
import { useSede } from "./useSede";
import {
  productsOrCategoryExcluded,
  menuProducts,
  coffeeCategories,
} from "../constants";
import { MenuProducts, Category } from "../types";
import { getTypeCardFromSede } from "@/utils";

type CategoryWithProducts = Category & {
  products: MenuProducts[];
};

export const useFilteredProducts = () => {
  const { sede } = useSede();

  const filteredData = useMemo(() => {
    if (!sede) {
      // If no sede selected, return all data
      const categoriesWithProducts = coffeeCategories.map((category) => ({
        ...category,
        products: menuProducts[category.id as keyof typeof menuProducts] || [],
      }));
      return {
        categories: categoriesWithProducts,
        products: categoriesWithProducts.flatMap((cat) => cat.products),
      };
    }

    const typeCard = getTypeCardFromSede(sede);
    if (!typeCard || !productsOrCategoryExcluded[typeCard]) {
      // If no exclusions for this type, return all data
      const categoriesWithProducts = coffeeCategories.map((category) => ({
        ...category,
        products: menuProducts[category.id as keyof typeof menuProducts] || [],
      }));
      return {
        categories: categoriesWithProducts,
        products: categoriesWithProducts.flatMap((cat) => cat.products),
      };
    }

    const exclusions = productsOrCategoryExcluded[typeCard];
    let filteredCategories = [...coffeeCategories];

    // Filter out excluded categories
    if (exclusions.category && exclusions.category.length > 0) {
      filteredCategories = filteredCategories.filter(
        (cat) => !exclusions.category.includes(cat.id)
      );
    }

    // Add products to categories and filter them
    const categoriesWithProducts: CategoryWithProducts[] =
      filteredCategories.map((category) => {
        let categoryProducts =
          menuProducts[category.id as keyof typeof menuProducts] || [];

        // Filter products within this category
        if (exclusions.products && exclusions.products.length > 0) {
          const productExclusion = exclusions.products.find(
            (ex) => ex.category === category.id
          );

          if (productExclusion && productExclusion.excluded) {
            categoryProducts = categoryProducts.filter(
              (product) => !productExclusion.excluded.includes(product.name)
            );
          }
        }

        return {
          ...category,
          products: categoryProducts,
        };
      });

    const filteredProducts = categoriesWithProducts.flatMap(
      (cat) => cat.products
    );

    return {
      categories: categoriesWithProducts,
      products: filteredProducts,
    };
  }, [sede]);

  return filteredData;
};
