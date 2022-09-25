<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InitDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $wordParam = [
            'value' => 'あんちょこ',
        ];
        DB::table('words')->insert($wordParam);

        $word = DB::table('words')->orderBy('created_at')->first('id');
        $wordId = $word->id;
        
        $descriptionParam1 = [
            'value' => 'これはあんちょこアプリです。',
            'word_id' => $wordId,
        ];
        $descriptionParam2 = [
            'value' => 'Chrome拡張とLaravel製アプリケーションを利用します。',
            'word_id' => $wordId,
        ];
        DB::table('descriptions')->insert($descriptionParam1);
        DB::table('descriptions')->insert($descriptionParam2);

        $linkParam1 = [
            'value' => 'https://xxxxx.com',
            'word_id' => $wordId,
        ];
        $linkParam2 = [
            'value' => 'https://yyyyy.com',
            'word_id' => $wordId,
        ];
        DB::table('links')->insert($linkParam1);
        DB::table('links')->insert($linkParam2);
    }
}
