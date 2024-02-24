import React from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => 
  {
    console.log("TEsteee");
    return navigate("/");
  }

  return (
    <div>ClientDetail</div>
  )
}

export default ClientDetail