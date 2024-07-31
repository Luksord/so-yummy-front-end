import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

const WelcomePage = lazy(() => import("pages/WelcomePage"));
const Register = lazy(() => import("pages/Auth/Register"));
const Login = lazy(() => import("pages/Auth/Login"));
const HomePage = lazy(() => import("pages/HomePage"));
const CategoriesPage = lazy(() => import("pages/CategoriesPage"));
const RecipePage = lazy(() => import("components/CategoryRecipes"));
const AddRecipePage = lazy(() => import("pages/AddRecipePage"));
const MyRecipesPage = lazy(() => import("pages/MyRecipesPage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage"));
const ShoppingListPage = lazy(() => import("pages/ShoppingListPage"));
const SearchPage = lazy(() => import("pages/SearchPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
