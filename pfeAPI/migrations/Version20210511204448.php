<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210511204448 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE entretien (id INT AUTO_INCREMENT NOT NULL, agent_id INT NOT NULL, candidarture_id INT NOT NULL, dateentretien DATE NOT NULL, commentaire VARCHAR(255) NOT NULL, etat VARCHAR(255) NOT NULL, candidature_id INT NOT NULL, INDEX IDX_2B58D6DA3414710B (agent_id), INDEX IDX_2B58D6DA49D90CF0 (candidarture_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE entretien ADD CONSTRAINT FK_2B58D6DA3414710B FOREIGN KEY (agent_id) REFERENCES agent (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE entretien ADD CONSTRAINT FK_2B58D6DA49D90CF0 FOREIGN KEY (candidarture_id) REFERENCES candidature (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE entretien');
    }
}
