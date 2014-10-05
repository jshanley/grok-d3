def filter_by_ext(ext)
  case ext
  when 'md'
    filter :kramdown
  when 'haml'
    filter :haml
  when 'scss'
    filter :sass, :syntax => :scss
  end
end
