localStorage
> Presistant Storage
> It save wrt to browser
> we have to remove it manully

localStorage.setItem('tokenval',1234)
undefined
localStorage.getItem('tokenval')
'1234'

localStorage.removeItem('tokenval')
undefined
localStorage.getItem('tokenval')
null
localStorage.setItem('tokenval',1234)




sessionStorage
> Temp Storage
> Save wrt to website
> Remove as soon as we close the tab

sessionStorage.setItem('testKey','ddvw3rve')
undefined
sessionStorage.getItem('testKey')
'ddvw3rve'
sessionStorage.removeItem('testKey')
undefined
sessionStorage.setItem('testKey','ddvw3rve')

cookies
> Save wrt to URL
> have expires in time

document.cookie="country=India; expires=Sun, 7 Jul 2024 12:00:00 UTC"
'country=India; expires=Sun, 7 Jul 2024 12:00:00 UTC'