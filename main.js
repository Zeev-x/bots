const ytdl = require('ytdl-core');
const fs = require('fs');

// URL video YouTube yang ingin Anda unduh audionya
const videoUrl = 'https://youtu.be/dy90tA3TT1c';

var tm = new Date().getTime();
// Nama file audio yang akan disimpan (tanpa ekstensi)
const outputFileName = `audio_${tm}`;

// Fungsi untuk mengunduh audio dari YouTube dan menyimpannya sebagai file .mp3
function downloadAudio() {
  return new Promise((resolve, reject) => {
    const audioStream = ytdl(videoUrl, { quality: 'highestaudio' });

    audioStream.pipe(fs.createWriteStream(`${outputFileName}.mp3`));

    audioStream.on('progress', (chunkLength, downloaded, total) => {
      const percent = (downloaded / total) * 100;
      console.log(`Downloaded: ${percent.toFixed(2)}%`);
    });

    audioStream.on('end', () => {
      console.log('Audio berhasil diunduh dan disimpan sebagai file mp3.');
      resolve({ status: 'success', message: 'Audio berhasil diunduh' });
    });

    audioStream.on('error', (error) => {
      console.error('Error:', error.message);
      reject({ status: 'error', message: 'Gagal mengunduh audio' });
    });
  });
}

// Panggil fungsi untuk mengunduh audio dan olah hasilnya sebagai data JSON
downloadAudio()
  .then((result) => {
    const jsonData = JSON.stringify(result, null, 2);
    fs.writeFile(`${outputFileName}.json`, jsonData, (err) => {
      if (err) {
        console.error('Gagal menyimpan file JSON:', err);
      } else {
        console.log('File JSON berhasil disimpan.');
        var jsonFileName = `${outputFileName}.json`
        fs.readFile(jsonFileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Gagal membaca file JSON:', err);
  } else {
    // Parse data JSON menjadi objek atau array
    const jsonData = JSON.parse(data);

    // Tampilkan isi file JSON di konsol
    console.log(jsonData);
  }
});
      }
    });
  })
  .catch((error) => {
    console.error('Gagal mengunduh audio:', error);
  });
