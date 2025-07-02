const { sequelize, User, Customer, Lead, Interaction } = require('./models');

async function seed() {
  try {
    await sequelize.sync({ force: true }); // يمسح ويبني الجداول من جديد

    // 1. مستخدمين
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin'
    });

    const sales = await User.create({
      name: 'Sales Ahmed',
      email: 'ahmed@example.com',
      password: 'ahmed123',
      role: 'sales'
    });

    // 2. عملاء
    const customer1 = await Customer.create({
      name: 'شركة البركة',
      email: 'client1@baraka.com',
      phone: '01000111222',
      company: 'البركة للتوريدات',
      assignedTo: sales.id
    });

    const customer2 = await Customer.create({
      name: 'محمد يوسف',
      email: 'm.youssef@gmail.com',
      phone: '01122334455',
      company: 'شركة النور',
      assignedTo: sales.id
    });

    // 3. Leads (عملاء محتملين)
    await Lead.bulkCreate([
      {
        name: 'أحمد طارق',
        email: 'ahmed.tareq@mail.com',
        phone: '01012345678',
        status: 'new',
        assignedTo: sales.id
      },
      {
        name: 'Sara Khaled',
        email: 'sara.khaled@mail.com',
        phone: '01234567890',
        status: 'contacted',
        assignedTo: sales.id
      }
    ]);

    // 4. Interactions
    await Interaction.create({
      customerId: customer1.id,
      type: 'call',
      content: 'تم التواصل مع العميل بخصوص العرض وتم الاتفاق على إرسال عرض السعر.',
      createdBy: sales.id
    });

    await Interaction.create({
      customerId: customer2.id,
      type: 'meeting',
      content: 'اجتماع تمهيدي لمناقشة تفاصيل التعاون.',
      createdBy: sales.id
    });

    console.log('Database seeded successfully.');
    process.exit();
  } catch (err) {
    console.error(' Seeding error:', err);
    process.exit(1);
  }
}

seed();
