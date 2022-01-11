<?php

namespace App\Http\Controllers;

use App\Models\Fanfic;
use Illuminate\Http\Request;

class FanficController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('fanfics/creater');
    }

    public function app()
    {
        return redirect('/fanficsApp');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $text = $request->textFanfic;
        $name = $request->nameFanfic;

        Fanfic::create([
            'f_name'=>$name,
            'f_text'=>$text
        ]);
        return redirect('/fanficsApp');
    }

    public function deleteFanfic(Request $request)
    {
        $id = $request->idFanfic;

        Fanfic::find($id)->delete();
        return redirect('/fanficsApp');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Fanfic  $fanfic
     * @return \Illuminate\Http\Response
     */
    public function show(Fanfic $fanfic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Fanfic  $fanfic
     * @return \Illuminate\Http\Response
     */
    public function edit(Fanfic $fanfic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Fanfic  $fanfic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Fanfic $fanfic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Fanfic  $fanfic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fanfic $fanfic)
    {
        //
    }

    public function allData()
    {
        return view('fanfics/fanficsApp', ['data' => Fanfic::all()]);
    }

    public function showFanfic()//$id)
    {   
        return view('fanfics/reader', ['fanfic' => Fanfic::find(2)]);//$id)]);
    }

    public function updateFanfic($id, Request $request)
    {
        $text = $request->textFanfic;
        $name = $request->nameFanfic;

        Fanfic::find($id)->update([
            'f_name'=>$name,
            'f_text'=>$text
        ])->save();
        return redirect('/fanficsApp');
    }
}
