
import { Head } from '@inertiajs/react';

type StatCardProps = {
    title: string;
    value: string;
    description: string;
};

function StatCard({ title, value, description }: StatCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {title}
            </p>

            <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                {value}
            </p>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
}

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Admin CHIMULIA" />

            <div className="flex flex-col gap-6 p-4 md:p-6">
                <div>
                    <p className="text-sm font-medium text-indigo-600">
                        PANEL ADMIN
                    </p>

                    <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                        Dashboard CHIMULIA
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Kelola informasi dan konten website induk CHIMULIA dari
                        satu tempat.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard
                        title="Halaman Website"
                        value="0"
                        description="Halaman yang dikelola"
                    />

                    <StatCard
                        title="Unit CHIMULIA"
                        value="3"
                        description="Press, Edu, dan Academy"
                    />

                    <StatCard
                        title="Mitra Kolaborasi"
                        value="0"
                        description="Mitra yang terdaftar"
                    />

                    <StatCard
                        title="Konten Publikasi"
                        value="0"
                        description="Konten yang tersedia"
                    />
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Pengelolaan Website
                    </h2>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Bagian-bagian yang nantinya dapat dikelola melalui
                        dashboard admin.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Profil CHIMULIA
                            </h3>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Informasi perusahaan, visi, misi, dan nilai
                                utama.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Unit Usaha
                            </h3>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Informasi Chimulia Press, Chimulia Edu, dan
                                Chi Mulia Academy.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Kolaborasi dan Mitra
                            </h3>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Informasi peluang kerja sama, mitra, dan
                                sponsorship.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Kontak dan Informasi
                            </h3>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Alamat, email, nomor telepon, dan media sosial
                                CHIMULIA.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = undefined;
