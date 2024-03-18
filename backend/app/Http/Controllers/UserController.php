<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Employee;

class UserController extends Controller
{
   public function login()
   {
      $employee = new Employee();
      $employees = $employee->get();

	   return json_encode($employees);
   }
}
