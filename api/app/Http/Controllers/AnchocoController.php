<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Models\Word;
use App\Models\Description;
use App\Models\Link;

class AnchocoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $words = Word::all();
        return $words;
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
        Log::debug('AnchocoController store');

        $rawWord = $request->input('word');
        $rawDescription = $request->input('description');
        $rawLink = $request->input('link');

        Log::debug('req: '.$rawWord);
        Log::debug('req: '.$rawDescription);
        Log::debug('req: '.$rawLink);

        // TODO: transactionどうするの
        $word = new Word;
        $word->value = $rawWord;
        $word->save();

        $wordId = $word->id;

        $description = new Description;
        $description->value = $rawDescription;
        $description->word_id = $wordId;
        $description->save();

        $link = new Link;
        $link->value = $rawLink;
        $link->word_id = $wordId;
        $link->save();

        $ret = '{'.'"word"'.':"'.$word->value.'",'.'"description"'.':"'.$description->value.'",'.'"link":"'.$link->value.'"'.'}';
        Log::debug($ret);
        return $ret;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
