import { ReactElement } from "react";
import {  Outlet } from "react-router-dom";
import { Navigate } from 'react-router-dom';

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  adminOnly?: boolean;
  admin?: boolean;
  redirect?: string;
}
const ProtectedRoute =() =>
{
  return 
}

export  default ProtectedRoute

