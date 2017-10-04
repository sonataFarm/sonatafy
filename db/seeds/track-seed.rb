require 'faker'

class TrackSeed
  def self.get_random_tempo
    tempo = tempo_markings.sample

    modified = (rand(0..1) > 0)
    modified ? "#{tempo} #{tempo_modifications.sample}" : tempo
  end

  def self.random_audio_url
    "audio#{rand(1..100)}.mp3"
  end

  def self.tempo_markings
    %w[
      Grave Largo Lento Adagio Moderato Allegretto Allegro Animato
      Agitato Vivace Presto Prestissimo
    ]
  end

  def self.tempo_modifications
    %w[
      ma\ non\ troppo grazioso appassionato espressivo con\ amore affettuoso
      bruscamente con\ bravura con\ brio con\ fuoco dolce misterioso
      sostenuto ma\ non\ troppo con\ forze brillante energico furioso maestoso
      a\ la\ marcia scherzando
    ]
  end

  def self.instruments
    %w[
      Piano Violin French\ Horn Oboe Drum Electric\ Guitar
      Bass\ Clarinet Clarinet Xylophone Vibraphone Theremin
      Organ Piccolo Drumsticks
    ]
  end

  def self.songs
    [
      "Fledeinsamkeit", "Fruendliche Vision", "Traum durch die Dammerung",
      "An die Lieder", "Frauenliebe und Leben", "Die Kartenlegerin", "Der Soldat",
      "Der Tod und das Madchen", "Nachtfier", "Die junge Nonne",
      "Botschaft", "Nicht mehr zu dir zu gehen", "Wir wandelten", "An Schwager Kronos",
      "Anakreons Grab", "Erlkonig", "Ganymed", "Geheimes", "Harfenspieler-Lieder",
      "Prometheus", "Mignon-Lieder", "Rastlose Liebe", "Wandrers Nachtlieder",
      "Nuit d'etoiles", "L'invitation au voyage", "La vie anterieure",
      "Le manoir de Rosemonde", "Beau soir", "Romance", "Chanson triste", "Psyche",
      "L'absence", "Trois chansons de Bilitis", "Sainte", "Aurore", "Automne", "Le secret",
      "Soupir", "Fantoches", "Green", "Il pleure dans mon coeur", "Pioggia",
      "In questa tomba oscura", "I pastori", "Nebbie", "Notte"
    ]
  end

  def self.random_song
    songs.sample
  end

  def self.pieces
    [
      "Ballade", "Rondeau", "Romance", "Intermezzo", "Scherzo", "Capriccio",
      "Gavotte", "Gigue", "Minuet", "Sarabande", "Theme and Variations",
      "Waltz", "Serenade", "Toccata", "Fugue", "Nocturne", "Mazurka"
    ]
  end

  def self.random_piece_with_key
    "#{pieces.sample} in #{Faker::Music.key} #{%w[major minor].sample}"
  end

  def self.random_duration_in_seconds
    rand(180..800)
  end

  def self.movements(genre = nil)
    genre ||= [:symphony, :concerto, :sonata, :string_quartet].sample

    case genre
    when :symphony
      movements = rand(3..4)
      base = "Symphony"
    when :concerto
      movements = rand(3..4)
      base = "#{instruments.sample} Concerto"
    when :sonata
      movements = rand(3..4)
      base = "#{instruments.sample} Sonata"
    when :string_quartet
      movements = rand(3..4)
      base = "String Quartet"
    end

    roman_numerals = {
      1 => 'I',
      2 => 'II',
      3 => 'III',
      4 => 'VI',
      5 => 'V',
      6 => 'VI',
      7 => 'VII',
      8 => 'VIII',
      9 => 'IX',
      10 => 'X'
    }

    number = rand(10)
    base = "#{base} No. #{number}"
    tracks = []

    movements.times do |i|
      movement = roman_numerals[i + 1]
      tempo = get_random_tempo
      track = "#{base}: #{movement}. #{tempo}"
      tracks << track
    end

    tracks
  end
end
