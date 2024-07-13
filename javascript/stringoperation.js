let a = "amSterDAm"
undefined
a.toUpperCase()
'AMSTERDAM'
a.toLowerCase()
'amsterdam'
a.charAt(0)
'a'
a.charAt(1)
'm'
a.charAt(-1)
''
a.slice(1)
'mSterDAm'
a.slice(2,5)
'Ste'
a.slice(-1)
'm'
a.slice(-2)
'Am'




let b = "hii"
let c = "Hii"
undefined
b == c
false
b.toLowerCase() == c.toLowerCase()
true


a
'amSterDAm'
a[0].toUpperCase()
'A'
a.slice(1)
'mSterDAm'
a.slice(1).toLowerCase()
'msterdam'
a[0].toUpperCase()+a.slice(1).toLowerCase()
'Amsterdam'
let d = "pArIs"
undefined
d[0].toUpperCase()+d.slice(1).toLowerCase()
'Paris'
d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()
'Paris'

let e = "   Nikita  "
undefined
e.length
11
e.trim()
'Nikita'
let e = "   Nik ita  "
undefined
e
'   Nik ita  '
e.trim()
'Nik ita'
e.replaceAll(' ','')
'Nikita'