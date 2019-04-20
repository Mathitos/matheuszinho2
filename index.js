import discord from 'discord.js'
import dotenv from 'dotenv'
import handleCommands from './src/commands'

console.log(
  '        :::   :::       ::: ::::::::::: :::    ::: :::::::::: :::    :::  :::::::: ::::::::: ::::::::::: ::::    ::: :::    :::  :::::::: \n' +
    '      :+:+: :+:+:    :+: :+:   :+:     :+:    :+: :+:        :+:    :+: :+:    :+:     :+:      :+:     :+:+:   :+: :+:    :+: :+:    :+: \n' +
    '    +:+ +:+:+ +:+  +:+   +:+  +:+     +:+    +:+ +:+        +:+    +:+ +:+           +:+       +:+     :+:+:+  +:+ +:+    +:+ +:+    +:+  \n' +
    '   +#+  +:+  +#+ +#++:++#++: +#+     +#++:++#++ +#++:++#   +#+    +:+ +#++:++#++   +#+        +#+     +#+ +:+ +#+ +#++:++#++ +#+    +:+   \n' +
    '  +#+       +#+ +#+     +#+ +#+     +#+    +#+ +#+        +#+    +#+        +#+  +#+         +#+     +#+  +#+#+# +#+    +#+ +#+    +#+    \n' +
    ' #+#       #+# #+#     #+# #+#     #+#    #+# #+#        #+#    #+# #+#    #+# #+#          #+#     #+#   #+#+# #+#    #+# #+#    #+#     \n' +
    '###       ### ###     ### ###     ###    ### ##########  ########   ######## ######### ########### ###    #### ###    ###  ########       \n',
)

dotenv.config()
const Matheuszinho = new discord.Client()

Matheuszinho.on('ready', () => {
  console.log('Oi, estou pronto para ajudar meus amiguinhos!!!')
  Matheuszinho.user.setActivity('Quero Ajudar')
})

Matheuszinho.on('message', message => {
  handleCommands(Matheuszinho.user, message)
})

Matheuszinho.login(process.env.CLIENT_SECRET_KEY)
