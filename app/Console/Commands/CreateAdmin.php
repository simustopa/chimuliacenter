<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CreateAdmin extends Command
{
    protected $signature = 'chimulia:create-admin';

    protected $description = 'Membuat akun admin pertama CIMULIA';

    public function handle(): int
    {
        $name = $this->ask('Nama admin');
        $email = $this->ask('Email admin');

        $validator = Validator::make(
            [
                'name' => $name,
                'email' => $email,
            ],
            [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            ]
        );

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->error($error);
            }

            return self::FAILURE;
        }

        $password = $this->secret('Password admin (minimal 12 karakter)');

        if (! is_string($password) || strlen($password) < 12) {
            $this->error('Password harus minimal 12 karakter.');

            return self::FAILURE;
        }

        $confirmation = $this->secret('Ulangi password admin');

        if ($password !== $confirmation) {
            $this->error('Konfirmasi password tidak cocok.');

            return self::FAILURE;
        }

        User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
        ]);

        $this->info('Akun pengguna berhasil dibuat.');
        $this->warn(
            'Akun ini belum memiliki hak admin khusus. ' .
            'Kita akan mengatur otorisasi admin pada langkah berikutnya.'
        );

        return self::SUCCESS;
    }
}
